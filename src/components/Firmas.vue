<template>
    <FormKit type="group" #default="{ value }">
        <div class="form-group">
            <FormKit
                name="name"
                label="Nombre y Apellido"
                type="text"
                value="Juan Perez"
            />

            <FormKit
                name="posicion"
                label="Posición"
                type="text"
                value="Front-end Developer"
            />

            <FormKit
                name="wp"
                label="Whatsapp"
                type="text"
                value="+52 33 30338939"
            />

            <FormKit
                name="email"
                type="email"
                label="Email"
                value="nombre@sellia.com.mx"
                :delay="1000"
                validation-visibility="live"
            />
        </div>

        <div class="opcionales">
            <h3>Opcionales:</h3>
        </div>

        <div class="form-group row-opcionales">
            <span class="column-opcionales">
                <FormKit
                    for="wp1"
                    name="tel1"
                    label="Teléfono 1"
                    type="text"
                    value=""
                />

                <div>
                    <input type="checkbox" id="checkWP" value="checkWP1" v-model="checkedWhatsapp1">
                    <label for="checkWP">Es Whatsapp <img src="https://img.icons8.com/material-outlined/452/whatsapp--v1.png" width="13"  style="display: inline-block;" /></label>
                </div>
            </span>

            <span class="column-opcionales">
                <FormKit
                    name="tel2"
                    label="Teléfono 2"
                    type="text"
                    value=""
                />

                <div>
                    <input type="checkbox" id="checkWP" value="checkWP2" v-model="checkedWhatsapp2">
                    <label for="checkWP">Es Whatsapp <img src="https://img.icons8.com/material-outlined/452/whatsapp--v1.png" width="13"  style="display: inline-block;" /></label>
                </div>
            </span>
        </div>
 
        <hr style="margin: 50px 0;" />
        
        <table cellpadding="0" cellspacing="0" style="font-size: 1rem; font-family: Trebuchet MS; width: 100%;" class="initial-table">
            <table cellpadding="0" cellspacing="0" >
                <tbody>
                    <tr>
                        <td width="150px" style="vertical-align: top; text-align: center; margin-right: 30px;">
                            <img src="https://preview.sellia.com.mx/images/logo-firmas.png" alt="Logo Sellia" style="max-width: 130px; display: block; margin: 0 auto;" />

                            <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: 1rem; font-family:Trebuchet MS; margin: 0 auto; text-align: center;">
                                <tbody>
                                    <tr>
                                        
                                    </tr>
                                    <tr>
                                        <td height="30"></td>
                                    </tr>
                                    <tr style="text-align: center; display: inline;">
                                        <td>
                                            <a href="https://www.facebook.com/sellia.business/" style="display: inline-block; padding: 0px;">
                                                <img width="30" height="30" src="https://cdn.gifo.wisestamp.com/s/fb/3b5998/48/0/background.png" style="float:left;border:none; border-radius: 50%;" border="0">
                                            </a>
                                        </td>
                                        <td width="5">
                                            <div></div>
                                        </td>
                                        <td>
                                            <a href="https://mx.linkedin.com/company/sellia-business" style="display: inline-block; padding: 0px;">
                                                <img width="30" height="30" src="https://cdn.gifo.wisestamp.com/s/ld/0077b5/48/0/background.png" style="float:left;border:none; border-radius: 50%;" border="0">
                                            </a>
                                        </td>
                                        <td width="5">
                                            <div></div>
                                        </td>
                                        <td>
                                            <a href="https://www.instagram.com/sellia_business/" style="display: inline-block; padding: 0px;">
                                                <img width="30" height="30" src="https://cdn.gifo.wisestamp.com/s/inst/E4405F/48/0/background.png" style="float:left;border:none;border-radius: 50%;" border="0">
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td width="30px"></td>
                        <td style="vertical-align: top; text-align: left;">
                            <h3 style="font-size: 16px; color: #000000; margin: 0 0 5px 0;">{{ value.name }}</h3>
                            <h4 style="font-size: 12px; color: #000000; margin: 0 0 5px 0;">{{ value.posicion }}</h4>
                            <p style="font-size: 12px; color: #000000; font-weight: 500; margin: 0 0 5px 0;">Sellia. Siempre disponible.</p>
                            <p style="font-size: 12px; color: #000000; margin: 0 0 5px 0;">México - Argentina</p>
                            
                            <table cellpadding="0" cellspacing="0"
                                style="vertical-align: -webkit-baseline-middle; font-size: 1rem; font-family: Trebuchet MS; width: 100%;">
                                <tbody>
                                    <tr>
                                        <td height="10"></td>
                                    </tr>
                                    <tr>
                                        <td color="#021E51" direction="horizontal" height="1" style="width: 100%; border-bottom: 1px solid rgb(2, 30, 81); border-left: none; display: block;"></td>
                                    </tr>
                                    <tr>
                                        <td height="10"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0"
                                style="vertical-align: -webkit-baseline-middle; font-size: 1rem; font-family: Trebuchet MS;">
                                <tbody>
                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <img src="https://img.icons8.com/material-outlined/452/whatsapp--v1.png" width="13"  style="display: block;" />
                                        </td>
                                        <td>
                                            <a :href="`https://wa.me/${value.wp}`.replace(/\s/g, '') " target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">{{ value.wp }}</a>
                                        </td>
                                    </tr>

                                    <!-- Opcional 1 -->
                                    
                                    <tr height="25" style="vertical-align: middle;" v-if="value.tel1">
                                        <div v-if="checkedWhatsapp1 == 'checkWP1'" style="display: contents;">
                                            <td width="30" style="vertical-align: middle;">
                                                <img src="https://img.icons8.com/material-outlined/452/whatsapp--v1.png" width="13"  style="display: block; margin-right: 10px" />
                                            </td>
                                            <td>
                                                <a :href="`https://wa.me/${value.tel1}`.replace(/\s/g, '') " target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">
                                                    {{ value.tel1 }}
                                                </a>
                                            </td>
                                        </div>

                                        <div v-else style="display: contents;">
                                            <td width="30" style="vertical-align: middle;">
                                                <img src="https://img.icons8.com/ios-glyphs/60/null/iphone.png"  width="13" style="display: block;"/>
                                            </td>
                                            <td>
                                                <a :href="`tel:${value.tel1}`.replace(/\s/g, '') " target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">
                                                    {{ value.tel1 }}
                                                </a>
                                            </td>
                                        </div>
                                    </tr>
                                    

                                    <!-- Opcional 2 -->
                                    <tr height="25" style="vertical-align: middle;" v-if="value.tel2">
                                        <div v-if="checkedWhatsapp2 == 'checkWP2'" style="display: contents;">
                                            <td width="30" style="vertical-align: middle;">
                                                <img src="https://img.icons8.com/material-outlined/452/whatsapp--v1.png" width="13"  style="display: block; margin-right: 10px" />
                                            </td>
                                            <td>
                                                <a :href="`https://wa.me/${value.tel2}`.replace(/\s/g, '') " target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">
                                                    {{ value.tel2 }}
                                                </a>
                                            </td>
                                        </div>

                                        <div v-else style="display: contents;">
                                            <td width="30" style="vertical-align: middle;">
                                                <img src="https://img.icons8.com/ios-glyphs/60/null/iphone.png"  width="13" style="display: block;"/>
                                            </td>
                                            <td>
                                                <a :href="`tel:${value.tel2}`.replace(/\s/g, '') " target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">
                                                    {{ value.tel2 }}
                                                </a>
                                            </td>
                                        </div>
                                    </tr>

                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <img src="https://img.icons8.com/ios-filled/452/telegram.png" width="13"  style="display: block;">
                                        </td>
                                        <td>
                                            <a href="http://t.me/selliasoportebot" target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">@selliasoportebot</a>
                                        </td>
                                    </tr>

                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <img src="https://img.icons8.com/material-outlined/452/mail.png" width="13"  style="display: block;"></td>
                                        <td>
                                            <a :href="`mailto:${value.email}`" target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">{{ value.email }}</a>
                                        </td>
                                    </tr>
                                    <tr height="25" style="vertical-align: middle;">
                                        <td width="30" style="vertical-align: middle;">
                                            <img src="https://img.icons8.com/ios/50/null/internet--v1.png" width="13" style="display: block;">
                                        </td>
                                        <td>
                                            <a href="http://www.sellia.com.mx" target="_blank" style="text-decoration: none; color: #000000; font-size: 12px;">www.sellia.com.mx</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>                                    
                        </td>
                    </tr>
                </tbody>
            </table>
        </table>
    </FormKit>

  </template>

  
  <script>
  export default {
    name: 'FirmaSellia',
        data: () => ({
        opcional2: true,
        checkedWhatsapp1: [],
        checkedWhatsapp2: []
    })
  }

  
  </script>
  
  