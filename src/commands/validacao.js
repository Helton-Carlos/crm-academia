export function senhaLogin(){
    const json = {
        login: [
          {
            usuario: "adm",
            senha: "0",
            id_colaborador: 0,
            autorizacao:[
              {login:"true"},
              {home:"true"},
            ]
          },
          {
            usuario: "helton",
            senha: "0",
            id_colaborador: 1,
            autorizacao:[
              {login:"true"},
              {home:"true"},
            ]
          }
        ]
      };
      return json;
}