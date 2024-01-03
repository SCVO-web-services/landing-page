import {
    NavbarBrand,
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
  } from '@nextui-org/react';
import styles from '../styles/Organigrama.module.css'

export default function Organigrama() {
    return (

        

    <div className={styles.parent}>
        <div className={styles.div1}> 
        <Navbar position="static">
          <NavbarBrand>
            <p className="font-bold text-inherit">SCVO</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-10" justify={'center'}>
            <NavbarItem isActive>
              <Link href="#">Organigrama</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Memorial</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Cursos</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Organigrama</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        </div>

        
        <div className={styles.div2}> 
            <div className={styles.titulo}>Quienes Somos</div>
            <div className={styles.parrafo}>Somos profesionales de la medicina pertenecientes a diferentes especialidades quienes con otros profesionales del campo de la salud, buscamos constantemente información científica actualizada y especializada en obesidad.
            </div>
            <br></br>
            <br></br>
            <div className={styles.titulo}>Vision</div>
            <div className={styles.parrafo}>Ser una sociedad médica donde se localice información científica actualizada y especializada en el área de la obesidad para satisfacer las necesidades formativas e informativas tanto de médicos, personal de salud, como población venezolana.
            </div>
            <br></br>
            <br></br>
            <div className={styles.titulo}>Mision</div>
            <div className={styles.parrafo}>Desarrollar en el campo de la obesidad educación continua del médico, y personal de salud, así como incentivar, promover, y apoyar la investigación científica buscando ofrecer cada día mejor atención al paciente obeso.
            </div>
        </div>
        <div className={styles.div3}> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png" />
        </div>

    </div> 
  );
}