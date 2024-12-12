// import Formule from './Formule'
// import Option from './Option'
//
// class Requiement {
//     public formule: Formule[];
//     public options: Option[] | []
//
//     constructor(
//         formule: Formule[],
//         options: Option[] | []
//     ) {
//         this.formule = formule;
//         this.options = options;
//     }
//
//     // public static fromJson(json: any): Requiement {
//     //     return new Requiement(
//     //         Formule.fromJson(json.formule),
//     //         json.options ? Option.fromJson(json.options) : null
//     //     )
//     // }
//
//     public static fromJson(json: any): Requiement {
//         // Vérification et transformation des formules
//         const formules = Array.isArray(json.formules)
//             ? json.formules.map((formuleData: any) => Formule.fromJson(formuleData))
//             : [];
//
//         // Vérification et transformation des options
//         const options = Array.isArray(json.options)
//             ? json.options.map((optionData: any) => Option.fromJson(optionData))
//             : [];
//
//         return new Requiement(formules, options);
//     }
//
//
// }

import Formules from './Formules'
import Options from './Options'

class Requiement {
    public formules: Formules;
    public options: Options ;

    constructor(
        formules: Formules,
        options: Options
    ) {
        this.formules = formules;
        this.options = options;
    }
    public static fromJson(json: any): Requiement {
        // Vérification et transformation des formules
        const formules = Array.isArray(json.formulas)
            ? json.formulas.map((formuleData: any) => Formules.fromJson(formuleData))
            : [];

        // Vérification et transformation des options
        const options = Array.isArray(json.options)
            ? json.options.map((optionData: any) => Options.fromJson(optionData))
            : [];

        return new Requiement(formules, options);
    }

}

export default Requiement;
