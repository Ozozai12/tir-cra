import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #555;
    border-bottom: 1px solid #555;
  }
`;

export const StyledLogoLink = styled(NavLink)`
  &.active {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
