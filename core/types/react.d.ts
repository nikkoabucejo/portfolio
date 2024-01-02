type Children = React.ReactNode;

type Page<TProps = {}> = React.FC<TProps>;

type Layout<TProps = {}> = React.FC<
  TProps & {
    children: Children;
  }
>;
