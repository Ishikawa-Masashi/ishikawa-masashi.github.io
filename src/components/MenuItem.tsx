import React from 'react';

import {
  cloneElement,
  useRef,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  ReactElement,
} from 'react';

type Props = {
  isMenuBarActive?: boolean;
  isMenuBarDescendant?: (element: HTMLElement) => boolean | undefined;
  menuBarEvents?: any;
  onSelect?: any;
  label?: string;
  command?: any;
  isTopLevel?: boolean;
  children: ReactNode;
  shortcut?: string;
  icon?: ReactNode;
};

function TreeCollapsedDark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0719 7.99999L5.71461 12.3573L6.33333 12.976L11 8.30935V7.69064L6.33333 3.02397L5.71461 3.64269L10.0719 7.99999Z"
        fill="#C5C5C5"
      />
    </svg>
  );
}

export default function MenuItem(props: Props): JSX.Element {
  const {
    isTopLevel,
    isMenuBarActive,
    icon = <React.Fragment></React.Fragment>,
  } = props;

  const elementRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  // const prevOpen = usePrevious(open);
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     open: false
  //   };
  // }

  // getInitialState = () => {
  //   return {
  //     open: false
  //   };
  // };

  const isChildElement = (element: Node) => {
    // return this.getDOMNode().contains(element);
    return elementRef.current?.contains(element);
  };

  useEffect(() => {
    return () => {
      unbindCloseHandlers();
    };
  }, []);

  useEffect(() => {
    if (open) {
      bindCloseHandlers();
      return;
    }
    unbindCloseHandlers();
  }, [open]);
  // componentDidUpdate(prevProps: any, prevState: any) {
  //   if (this.state.open && !prevState.open) {
  //     this.bindCloseHandlers();
  //   } else if (prevState.open && !this.state.open) {
  //     this.unbindCloseHandlers();
  //   }
  // }

  // componentWillUnmount() {
  //   this.unbindCloseHandlers();
  // }
  const hasSubmenu = () => {
    return React.isValidElement(props.children);
  };

  const getLabel = () => {
    return hasSubmenu() ? props.label : props.children;
    // if (hasSubmenu()) {
    //   return (
    //     <div className={"container"}>
    //       <div></div>
    //       <div>{props.label}</div>
    //     </div>
    //   );
    // }

    // return props.children;
  };

  const getShortcut = () => {
    // return props.shortcut;

    return hasSubmenu() ? (
      !isTopLevel && (
        <div className={'submenu-indicator'}>
          <TreeCollapsedDark />
        </div>
      )
    ) : (
      <div className={'keybinding'}>{props.shortcut}</div>
    );
  };

  const getIcon = () => {
    return !isTopLevel && <div className={'menu-item-icon'}>{icon}</div>;
  };

  const renderSubmenu = () => {
    if (!hasSubmenu()) return;

    const menu = props.children as ReactElement;

    return cloneElement(menu, {
      isMenuBarDescendant: props.isMenuBarDescendant,
      menuBarEvents: props.menuBarEvents,
      onSelect: onSelect,
    });
  };

  const onSelect = (key: any) => {
    props.onSelect(key);
    // setState({ open: false });
    setOpen(false);
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (hasSubmenu()) {
      toggleOpen();
    } else {
      props.onSelect(props.command);
    }
  };

  const onMouseOver = (e: React.MouseEvent) => {
    if (props.isTopLevel && isMenuBarActive) {
      // setState({ open: true });
      setOpen(true);
    }

    if (!props.isTopLevel && hasSubmenu()) {
      // setState({ open: true });
      setOpen(true);
    }
  };

  const onMouseOut = (e: React.MouseEvent) => {
    if (
      hasSubmenu() &&
      props.isMenuBarDescendant!(e.relatedTarget as HTMLElement) &&
      !isChildElement(e.relatedTarget as Node)
    ) {
      // setState({ open: false });
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    // setState({ open: !state.open });
    setOpen(!open);
  };

  const bindCloseHandlers = () => {
    document.addEventListener('click', onDocumentClick, false);
    props.menuBarEvents.addMouseOverListener(onMenuBarMouseOver);
  };

  const unbindCloseHandlers = () => {
    document.removeEventListener('click', onDocumentClick, false);
    props.menuBarEvents.removeMouseOverListener(onMenuBarMouseOver);
  };

  // const onDocumentClick = (e: MouseEvent) => {
  //   if (!isChildElement(e.target)) {
  //     // setState({ open: false });
  //     setOpen(false);
  //   }
  // };

  const onDocumentClick = useCallback(
    (ev: MouseEvent) => {
      if (!isChildElement(ev.target as Node)) {
        // setState({ open: false });
        setOpen(false);
        // ev.stopPropagation();
      }
    },
    [setOpen]
  );

  // const onMenuBarMouseOver = (e: React.MouseEvent) => {
  //   e.persist();
  //   if (!isChildElement(e.target)) {
  //     // setState({ open: false });
  //     setOpen(false);
  //   }
  // };

  const onMenuBarMouseOver = useCallback(
    (e: React.MouseEvent) => {
      e.persist();
      if (!isChildElement(e.target as Node)) {
        // setState({ open: false });
        setOpen(false);
      }
    },
    [setOpen]
  );

  // render() {
  // var classes = {
  //   open: this.state.open,
  //   "dropdown-submenu": !this.props.isTopLevel && this.hasSubmenu()
  // };
  let classes = 'react-menu-item';
  if (open) {
    classes += ' open';
  }

  if (!props.isTopLevel && hasSubmenu()) {
    classes += ' dropdown-submenu';
  }

  return (
    <div
      className={classes}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      ref={elementRef}
    >
      <div
        className={hasSubmenu() ? 'submenu-label' : 'menu-item-label'}
        onClick={onClick}
      >
        <div style={{ display: 'flex' }}>
          {getIcon()}
          {getLabel()}
        </div>
        {getShortcut()}
      </div>
      {renderSubmenu()}
    </div>
  );
}
