/**
 * Created by Vladimir on 15/07/2016.
 */


export class User {

  constructor(public idUser:number = null,
              public pseudoUser:string = null,
              public nomUser:string = null,
              public prenomUser:string = null,
              public passwordUser:string = null,
              public emailUser:string = null,
              public entrepriseUser:string = null,
              public createdAt:string = null,
              public hiddenInfos:string=null) {
  }
}
