import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';

export default function MenuItem({ item, navigate, open, currentPath }) {
  const [subOpen, setSubOpen] = useState(false);

  const handleClick = () => {
    if (item.subItems.length > 0) {
      setSubOpen(!subOpen);
    }
    navigate(item.path);
  };

  const isActive = currentPath === item.path || item.subItems.some(subItem => currentPath === subItem.path);

  return (
    <>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={handleClick}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            fontWeight: 'bold',
            fontSize: '16px',
            color: isActive ? '#881C62' : '#000',
            backgroundColor: isActive ? '#F4EDF2' : 'transparent',
            '&:hover': {
              backgroundColor: '#F4EDF2',
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: 'inherit',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          {item.subItems.length > 0 ? (subOpen ? <ExpandLess /> : <ExpandMore />) : null}
        </ListItemButton>
      </ListItem>
      {item.subItems.length > 0 && (
        <Collapse in={subOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subItems.map((subItem, subIndex) => {
              const isSubItemActive = currentPath === subItem.path;
              return (
                <ListItem key={subIndex} disablePadding sx={{ pl: 4 }}>
                  <ListItemButton
                    sx={{
                      maxHeight: 32,
                      justifyContent: open ? 'initial' : 'center',
                      px: 4,
                      fontSize: '10px',
                      color: isSubItemActive ? '#881C62' : '#555555',
                      backgroundColor: isSubItemActive ? '#F4EDF2' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#F4EDF2',
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(subItem.path);
                    }}
                  >
                    <ListItemText primary={subItem.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}
