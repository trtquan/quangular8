export interface ISubstanceInterface {
  selectedsubstanceSec?: SubstanceItem;
  substanceSec: SubstanceItem[];
  patientDetail: IPatientDetail;
}

export interface SubstanceItem {
  prequency: SubstancePrequencyEnum;
  /**
   * A small hack for imitating a different model returned from server,
   * for the simplicity sake the same interface was used.
   * In real life the server model may vary from the form model.
   * In this case you need to maintain both the server model interface and the client form interface.
   */
  useRoutes: UseRoute[] | UseRoutesEnum[];
}

export enum SubstancePrequencyEnum {
  DAILY = 1,
  MONTHLY = 2,
  YEARLY = 3
}

export interface IPatientDetail {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: {
    street: string;
    houseNum: string;
    city: string;
    floor: number;
  };
}


export interface UseRoute {
  name: UseRoutesEnum;
  selected: boolean
}

export enum UseRoutesEnum {
  BUCCAL = 'Buccal',
  INHALATION = 'Inhalational',
  INTRAMUSCULAR = 'Intramuscular',
}
