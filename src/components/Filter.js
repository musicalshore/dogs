import styled from "styled-components";
const Wrapper = styled.div`
  margin: 10px 5px;
  font: sans-serif 24px;
`;
function Filter({searchText, onFilter}) {
  return (
    <Wrapper>
      <label>
        Filter Breeds:
        <input type="text"
          value={searchText}
          onChange={onFilter}
        />
      </label>
    </Wrapper>
  )
}

export default Filter;
