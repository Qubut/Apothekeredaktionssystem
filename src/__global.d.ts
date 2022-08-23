
declare global {
  type ResponseData = {
    data: AnyData[];
  };
  type ResponseData2 = {
    data: AnyData;
  };
  type Data = {
    name: string;
    number: number;
    fax: number;
    email: string;
    adresse: {
      strasse: string;
      nr: number;
      plz: number;
      ort: string;
    };
    oeffnungszeiten: {
      zeiten: Zeit[];
    };
    motto: string;
    beschreibung: string;
    greeting: string;
  };
  type Zeit = {
    tage: string[];
    schichten: {
      von: {
        st: number;
        min: number;
      };
      bis: {
        st: number;
        min: number;
      };
    }[];
  };
  type Menu = {
    attributes: {
      items: {
        data: {
          attributes: Item;
        }[];
      };
    };
  };
  type Item = {
    order: number;
    title: string;
    url: string;
    target: string
  };
  type Leistungen = {
    attributes: Leistung;
  };
  type Leistung = {
    name: string;
    description: string;
  };
  type AnyData = { attributes: { [k: string]: any } };
}
export {};
