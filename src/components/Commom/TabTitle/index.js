import * as Style from "./index.styles";

const TabTitle = ({ children }) => {
  return (
    <Style.TabTitleLayout>
      <h2>{children}</h2>
    </Style.TabTitleLayout>
  );
};

export default TabTitle;
