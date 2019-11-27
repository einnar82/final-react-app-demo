import React from "react";
import { NavLink } from "react-router-dom";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListItemLink = props => {
  const { to, index, item } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <NavLink to={to} {...linkProps} innerRef={ref} />
      )),
    [to]
  );

  return (
    <ListItem button component={renderLink}>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default ListItemLink;
