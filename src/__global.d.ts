declare global {
  type DataObject = {
    data: Data;
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
  type Menus = {
    data: {
      items: Item[];
    }[];
  };
  type Item = {
    order: number;
    title: string;
    url: string;
    target: string;
  };
  type Leistungen = {
    data: Leistung[];
  };
  type Leistung = {
    name: string;
    description: string;
  };
  type Angebote = {
    data: Angebot[];
  };
  type Angebot = {
    id:number;
    name: string;
    uvp: number;
    discount: number;
    description: string;
    bild: {
      url: string;
    };
    type: string;
    amount?:number
    price?:number
  };
  type Jobs = {
    data: Job[];
  };
  type Job = {
    title: string;
    description: string;
    bild: {
      url: string;
    };
    telefon?: string;
    adresse?: string;
  };
  type Highlights = {
    data: Highlight[];
  };
  type Highlight = {
    title: string;
    description?: string;
    bild?: {
      url: string;
    };
    link?: string;
    color: string;
    publishedAt: string;
  };
  type AnyData = { attributes: { [k: string]: any } };
  type document = {
    [field: string]: any;
  };
  type _matchesInfo<T> = Partial<
    Record<keyof T, Array<{ start: number; length: number }>>
  >;

  type Hit<T = document> = T & {
    _formatted?: Partial<T>;
    _matchesInfo?: _matchesInfo<T>;
  };

  type Hits<T = document> = Array<Hit<T>>;
}
export {};
