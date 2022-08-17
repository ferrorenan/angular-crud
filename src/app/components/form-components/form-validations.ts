export class FormValidations {

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any): any {

    const config = {
      required: `O campo ${fieldName} é obrigatório.`,
      minlength: `O campo ${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      email: `O campo ${fieldName} não atende aos requisitos para e-mail.`,
      pattern: `O campo ${fieldName} precisa estar selecionado.`
    };

    // @ts-ignore
    return config[validatorName];
  }
}