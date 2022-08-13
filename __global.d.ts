
export type AnyData = { attributes: { [k: string]: any } };

  type ResponseData = {
    data: AnyData[];
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
  };
