import styled from 'styled-components'

export const Container = styled.div(() => `
  display: grid;
  grid-template-areas: 'data' 'buttons';
  grid-template-columns: 300px;
  grid-template-rows: 300px;
  justify-content: center;
`)

export const Data = styled.div(() => `
  grid-area: data;
  align-self: center;
  display: grid;
  grid-gap: 20px;
`)

export const Buttons = styled.div(() => `
  grid-area: buttons;
  display: grid;
  justify-items: center;
  grid-gap: 10px;
`)
