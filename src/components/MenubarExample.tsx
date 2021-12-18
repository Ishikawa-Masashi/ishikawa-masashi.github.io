import React from 'react';
import { MenuBar, MenuItem, Menu, Separator } from '../../src';

function onSelect(command: string) {
  console.log('Selected command: %s', command);
}

export const MenubarExample = () => {
  return (
    <MenuBar onSelect={onSelect}>
      <MenuItem label="File">
        <Menu>
          <MenuItem
            command="new-window"
            shortcut={'Ctrl+N Ctrl+N'}
            icon={<div>×</div>}
          >
            New Window
          </MenuItem>
          <MenuItem command="new-file">New File</MenuItem>
        </Menu>
      </MenuItem>

      <MenuItem label="Edit">
        <Menu>
          <MenuItem command="undo">Undo</MenuItem>
          <MenuItem command="redo">Redo</MenuItem>
          <Separator />
          <MenuItem label="Find">
            <Menu>
              <MenuItem command="find">Find…</MenuItem>
              <MenuItem command="find-next">Find Next</MenuItem>
              <MenuItem command="find-previous">Find Previous</MenuItem>
              <MenuItem command="use-selection-for-find">
                Use Selection For Find
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </MenuItem>

      <MenuItem label="Format">
        <Menu>
          <MenuItem command="undo" icon={<div>×</div>}>
            Undo
          </MenuItem>
          <MenuItem command="redo">Redo</MenuItem>
          <Separator />
          <MenuItem label="Find">
            <Menu>
              <MenuItem command="find">Find…</MenuItem>
              <MenuItem command="find-next">Find Next</MenuItem>
              <MenuItem command="find-previous">Find Previous</MenuItem>
              <MenuItem command="use-selection-for-find">
                Use Selection For Find
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem key="help" label="Help">
        <Menu>
          <MenuItem command="terms-of-use">Terms of Use</MenuItem>
          <MenuItem command="documentation">Documentation</MenuItem>
          <Separator />
          <MenuItem command="release-notes">Release Notes</MenuItem>
        </Menu>
      </MenuItem>
    </MenuBar>
  );
};
