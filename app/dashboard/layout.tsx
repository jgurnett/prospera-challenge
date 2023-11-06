'use client'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { DashboardRoutes } from '@/enums/routes'
import MovieCreationIcon from '@mui/icons-material/MovieCreation'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DescriptionIcon from '@mui/icons-material/Description'

const drawerWidth = 240

interface SidebarInfo {
  name: string
  link: string
  icon: JSX.Element
}

export default function ResponsiveDrawer({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const sidebarList: SidebarInfo[] = [
    {
      name: 'Submit application',
      link: `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.APPLICATION_FORM}`,
      icon: <AddCircleOutlineIcon />,
    },
    {
      name: 'Applications',
      link: `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.APPLICATIONS}`,
      icon: <DescriptionIcon />,
    },
  ]

  const extraList: SidebarInfo[] = [
    {
      name: 'New review',
      link: `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.FORM}`,
      icon: <AddCircleOutlineIcon />,
    },
    {
      name: 'Reviews',
      link: `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.REVIEWS}`,
      icon: <MovieCreationIcon />,
    },
  ]

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {sidebarList.map((sidebarInfo) => (
          <ListItem key={sidebarInfo.name} disablePadding>
            <ListItemButton href={sidebarInfo.link}>
              <ListItemIcon>{sidebarInfo.icon}</ListItemIcon>
              <ListItemText primary={sidebarInfo.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <p className="p-4">Extras</p>
      <List>
        {extraList.map((extraInfo) => (
          <ListItem key={extraInfo.name} disablePadding>
            <ListItemButton href={extraInfo.link}>
              <ListItemIcon>{extraInfo.icon}</ListItemIcon>
              <ListItemText primary={extraInfo.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  // copied skeleton from https://mui.com/material-ui/react-drawer/
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
