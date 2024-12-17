import React from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const RouterTransition = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: ReturnType<typeof useLocation>;
}) => {
  const navigationType = useNavigationType();
  return (
    <TransitionGroup
      className={"page-transition-wrapper"}
      childFactory={(child) => {
        return React.cloneElement(child, {
          classNames:
            navigationType === "POP"
              ? "page-transition--pop"
              : "page-transition--push",
        });
      }}
    >
      <CSSTransition
        key={location.pathname}
        timeout={1000}
        classNames={
          navigationType === "POP"
            ? "page-transition--pop"
            : "page-transition--push"
        }
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouterTransition;
