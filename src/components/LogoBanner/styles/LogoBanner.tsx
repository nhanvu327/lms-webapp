import styled from "../../../theme";

export const Logo = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSize.lg};
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SubText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
`;
