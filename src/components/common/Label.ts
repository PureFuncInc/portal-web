import styled from '@emotion/styled'

export const Label = styled.h4`
  padding: 25px 15px;
  margin-right: 15px;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.background.plain};
  box-shadow: 5px 5px ${({ theme }) => theme.color.shadow};
`
