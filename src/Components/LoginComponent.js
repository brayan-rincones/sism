import React from 'react'

const LoginComponent = () => {
  return (
    <div>
        <div class="container-fluid ps-md-0">
            <div id='leftLog'>
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                            <div class="row">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                <h3 class="login-heading mb-4">¡Bienvenido!</h3>
                            
                                {/* <!-- Sign In Form --> */}
                                <div id='rightLog'>
                                <form>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Usuario</label>
                                    </div>
                                    <br></br>

                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Contraseña</label>
                                    </div>
                                    <br></br>

                                    {/* <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="rememberPasswordCheck" />
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                        Remember password
                                        </label>
                                    </div> */}
                                    <br></br>

                                    <div class="d-grid">
                                        <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                                        <div class="text-center">
                                        <a class="forgotPass" href="#">¿Olvido su contraseña?</a>
                                        </div>
                                    </div>

                                </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent