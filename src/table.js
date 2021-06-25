import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./styles.css";

// import { allData } from "./constants";

const tableHead = {
  name: "Name",
  city: "City",
  phone: "Phone",
  email: "Email"
};

const Table = (props) => {
  // console.log(typeof allData)
  // console.log(typeof props.data === "undefined");

  var allData = props.data;
  if (typeof allData === "undefined") {
    allData = [];
  }
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    console.log(key.url);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return (
      <tr key={index}>
        <td>
          <img src={key.url} alt="" />
        </td>
        {columnData}
      </tr>
    );
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div className="search">
        <p><h2>Our Happy Customers</h2></p><input
          placeholder="Search Campaign"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            {headRow()}
          </tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
      />
    </>
  );
};
export default Table;
