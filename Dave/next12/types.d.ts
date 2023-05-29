type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogContent = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
