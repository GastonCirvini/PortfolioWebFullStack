
package gastonServer.service;

import gastonServer.model.Rol;
import gastonServer.repository.RolRepository;
import gastonServer.security.enums.RolNombre;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RolService {
    
    @Autowired
    RolRepository rolRepository;
    
    public Optional <Rol> getByRolNombre (RolNombre rolNombre){
        return rolRepository.findByRolNombre(rolNombre);
    }
    public void save (Rol rol) {
        rolRepository.save(rol);
    }
    
}
