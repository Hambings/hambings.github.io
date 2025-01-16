//const head = document.querySelector('head');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = ` 
<nav class="navbar navbar-expand-lg bg-navbar fixed-top">
        <div class="container">
            <a class="navbar-brand logoproyectos" href="#"><img width="210.1" height="44.726" src="images/logo_hambings_icono.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item primeritem">
                    <a class="nav-link" aria-current="page" href="index.html" style="color: #575757 !important;">Inicio</a>
                </li>
    
                  <li class="nav-item dropdown dropdown-hover" >
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown-hover" aria-haspopup="true" aria-expanded="false" style="color: #575757 !important;">
                      Empresa
                    </a>
                    <div class="dropdown-menu dropdown-menu-hover  " aria-labelledby="navbarDropdownMenuLink">
                      <a style="color: #575757; !important" class="dropdown-item" href="misionyvision.html"><i class="bi bi-flag"></i> Visión</a>
                      <a style="color: #575757; !important" class="dropdown-item" href="misionyvision.html"><i class="bi bi-eye"></i> Misión</a>
                      </div>
                  </li>

                   <li class="nav-item">
                    <a class="nav-link" style="color: #575757 !important;" aria-current="page" href="#politicas">Políticas</a>
                </li>

                  <li class="nav-item">
                    <a class="nav-link" style="color: #575757 !important;" aria-current="page" href="#servicios">Servicios</a>
                </li>

    
                   <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown-hover" aria-haspopup="true" aria-expanded="false" style="color: #575757 !important;">
                      herramientas
                    </a>
                    <div class="dropdown-menu dropdown-menu-hover letranegra" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="https://hambco.sharepoint.com/sites/hambings/SitePages/BibliotecaStaff.aspx" style="color: #575757 !important;">Biblioteca Hambings Staff</a>
                      <a class="dropdown-item" href="https://hambco.sharepoint.com/sites/hambings/SitePages/novedades/production/Default.aspx" style="color: #575757 !important;">HAMB Tools</a>
                    </div>
                  </li>

                 
    
                    <!-- <li class="nav-item">
                        <a class="navbar-brand logoproyectos1" href="#"><img src="Intranet/img/" alt=""></a>
                    </li> -->
    
                </ul>
            </div>
        </div>
    </nav>
  `;


footer.innerHTML = `
  <div class="container-fluid bg-light footer mt-3 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="row">
            <div class="col-md-12">
                <h5></h5>
                <div class="row">
                  
                    <div class="col-md-12 wow fadeInUp" style="font-size: 13px !important;">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-4" data-wow-delay="0.4s">
                                <h3 style="font-size: 14px;" class="text-dark"><b>CONTÁCTANOS</b></h3>
                                <p><i class="bi bi-geo-alt"></i> <strong>Dirección:</strong> Calle 12 #9-09 Villanueva, La Guajira</p>
                                <p><i class="bi bi-telephone"></i> <strong>Celular:</strong> +57 3174789256 / +57 3126819744</p>
                                <p><i class="bi bi-envelope"></i> <strong>Email Gerente: </strong><a href="mailto:Hugo.mendoza@hambings.com.co?subject=Soporte%20Sitio%20de%20Hambings">Hugo.mendoza@hambings.com.co</a></p>
                                <p><i class="bi bi-envelope"></i> <strong>Email RRHH: </strong><a href="mailto:capitalhumano@hambings.com.co?subject=Soporte%20Sitio%20de%20Hambings">capitalhumano@hambings.com.co</a></p>
                                
                              </div>

                                <div class="col-md-3" data-wow-delay="0.4s">
                                  <h3 style="font-size: 14px;" class="text-dark"><b>EMPRESA</b></h3>
                                  <a href="misionyvision.aspx" class="link-item">
                                    <i class="bi bi-flag"></i> Visión
                                </a>
                                <a href="misionyvision.aspx" class="link-item">
                                    <i class="bi bi-eye"></i> Misión
                                </a>
                                  </div>
                            <div class="col-md-3" data-wow-delay="0.8s">
                                <h3 style="font-size: 14px;" class="text-dark"><b>SERVICIOS</b></h3>
                                <p><i class="bi bi-bar-chart"></i> Inteligencia de negocios</p>
                                <p><i class="bi bi-diagram-3"></i> Administración de procesos de negocio</p>
                                <p><i class="bi bi-search"></i> Minería de datos</p>
                                <p><i class="bi bi-box-seam"></i> Gestión de activos</p>
                                <p><i class="bi bi-arrows-angle-contract"></i> Integración de servicios de negocio y aplicación</p>

                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="text-center mt-4">Copyright © Hambings. Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
`;
