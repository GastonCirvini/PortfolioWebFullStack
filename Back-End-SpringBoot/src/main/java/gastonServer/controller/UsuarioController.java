
package gastonServer.controller;
import gastonServer.model.JwtDto;
import gastonServer.model.LoginUsuario;
import gastonServer.model.Mensaje;
import gastonServer.model.NuevoUsuario;
import gastonServer.model.Rol;
import gastonServer.model.Usuario;
import gastonServer.security.enums.RolNombre;
import gastonServer.security.jwt.JwtProvider;
import gastonServer.service.RolService;
import gastonServer.service.UsuarioService;
import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/auth")
@CrossOrigin
public class UsuarioController {
    
    @Autowired
    PasswordEncoder passwordEncoder;
    
    @Autowired
    AuthenticationManager authenticationManager;
    
    @Autowired
    UsuarioService usuarioService;
    
    @Autowired
    RolService rolService;
    
    @Autowired
    JwtProvider jwtProvider;
    
    @PostMapping ("/nuevo")
    public ResponseEntity <?> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario, BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            return new ResponseEntity (new Mensaje("campos mal puestos o mail inválido"), HttpStatus.BAD_REQUEST);
        if (usuarioService.existsByNombreUsuario(nuevoUsuario.getNombreUsuario()))
            return new ResponseEntity (new Mensaje ("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if(usuarioService.existsByEmail(nuevoUsuario.getEmail()))
            return new ResponseEntity (new Mensaje ("Ese mail ya existe"), HttpStatus.BAD_REQUEST);
        
        Usuario usuario = new Usuario (nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(), nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));
       
       Set <Rol> roles = new HashSet<> ();
       roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
       if(nuevoUsuario.getRoles().contains("admin"))
           roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        usuario.setRoles(roles);
         usuarioService.save(usuario);
        return new ResponseEntity (new Mensaje ("usuario guardado"), HttpStatus.CREATED);
        
    }
    
   @PostMapping ("/login")
    public ResponseEntity <JwtDto> login (@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult){
        if (bindingResult.hasErrors())
            return new ResponseEntity (new Mensaje ("campos mal puestos"), HttpStatus.BAD_REQUEST);
        Authentication authentication = authenticationManager.authenticate (new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(), loginUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        JwtDto jwtDto = new JwtDto (jwt, userDetails.getUsername(), userDetails.getAuthorities());
        return new ResponseEntity (jwtDto, HttpStatus.OK);
    }
    
 
}