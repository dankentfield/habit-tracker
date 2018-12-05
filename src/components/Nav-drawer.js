import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText, IconButton, Paper, TextField, Fab} from '@material-ui/core/';
import { Add, ViewList, AccountCircle } from '@material-ui/icons/';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  papermain: {
    padding: 10,
  },
  textfield: {
    padding: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Habit Tracker!
          </Typography>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
         
            <ListItem button >
              <ListItemIcon>
                <ViewList />
                <ListItemText primary='View All Habits' />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Add />
                <ListItemText primary='Add new Habit' />
              </ListItemIcon>
            </ListItem>

        </List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.papermain}>
          <form onSubmit className={classes.form}>
            <TextField
            className={classes.textfield}
            id="outlined-name"
            label="Whats the new habit?"
            margin="normal"
            variant="outlined" />
            <TextField
            className={classes.textfield}
            id="outlined-name"
            label="Why do you want it?"
            margin="normal"
            variant="outlined" />
            <TextField
            className={classes.textfield}
            id="outlined-name"
            label="What will your excuses be?"
            margin="normal"
            variant="outlined" />
            <TextField
            className={classes.textfield}
            id="outlined-name"
            label="How can you overcome this?"
            margin="normal"
            variant="outlined" />
            <TextField
            className={classes.textfield}
            id="outlined-name"
            label="How often do you want this?"
            margin="normal"
            variant="outlined" />
            <Fab color="primary" aria-label="Add" className={classes.fab}>
              <Add />
            </Fab>
          </form>
        </Paper>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);