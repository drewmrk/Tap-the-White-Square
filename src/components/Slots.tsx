import styled from 'styled-components'

const WrapperStyles = styled.div`
  @media (max-width: 799px) {
    width: 95%;
  }
  @media (min-width: 800px) {
    width: 65%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
`

const SlotsWrapperStyles = styled.div`
  @media (max-width: 799px) {
    --dimensions: 100px 100px 100px;
  }
  @media (min-width: 800px) {
    --dimensions: 200px 200px 200px;
  }
  grid-template-rows: var(--dimensions);
  grid-template-columns: var(--dimensions);
  display: grid;
  margin: 10px auto;
`

const SlotsStyles = styled.button`
  @media (max-width: 799px) {
    --dimensions: 75px;
  }
  @media (min-width: 800px) {
    --dimensions: 100px;
  }
  width: var(--dimensions);
  height: var(--dimensions);
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  border: 0;
  &.inactive {
    background-color: grey;
    cursor: not-allowed;
  }
  &.active {
    background-color: white;
    cursor: pointer;
  }
`

let slotsArray: Array<JSX.Element> = []

for (let i = 1; i < 10; i++) {
  slotsArray.push(<SlotsStyles className="inactive" id={JSON.stringify(i)} key={i} />)
}

const Slots = () => (
  <WrapperStyles>
    <SlotsWrapperStyles>{slotsArray}</SlotsWrapperStyles>
  </WrapperStyles>
)

export default Slots
