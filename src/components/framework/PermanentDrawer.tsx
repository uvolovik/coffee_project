import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Navigation from './Navigation';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './constents';

type PermanentDrawerProps = {
	handleDrawerPin: () => void;
	pinned: boolean;
};
const useStyles = makeStyles(theme => ({
	drawer: {
		width: DRAWER_WIDTH,
		flexShrink: 0
	},
	drawerPaper: {
		width: DRAWER_WIDTH
	},
	pinned: {
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	}
}));
export default function PermanentDrawer(props: PermanentDrawerProps) {
	const classes = useStyles();
	return (
		<nav
			className={clsx({
				[classes.drawer]: true,
				[classes.pinned]: props.pinned
			})}
			aria-label="mailbox folders"
		>
			<Drawer
				classes={{
					paper: clsx({
						[classes.drawerPaper]: true,
						[classes.pinned]: props.pinned
					})
				}}
				variant="permanent"
				open
			>
				<Navigation handleDrawerPin={props.handleDrawerPin} />
			</Drawer>
		</nav>
	);
}
