import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
type NavigationProps = {
	handleDrawerPin: () => void;
};
const useStyles = makeStyles(theme => ({
	pinIcon: {
		'&:hover, &:focus': {
			transform: 'rotate(-45deg)'
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: theme.spacing(0, 0.5),
		...theme.mixins.toolbar
	}
}));

export default function Navigation(props: NavigationProps) {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar}>
				<Hidden smUp implementation="css">
					<IconButton
						size="medium"
						className={classes.pinIcon}
						aria-label="drawer-pin"
						onClick={props.handleDrawerPin}
					>
						<Icon className="fa fa-thumb-tack" />
					</IconButton>
				</Hidden>
			</div>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem component="li" button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</>
	);
}
