import React, { useEffect, useState } from "react";
import Header from "../../layounts/header/Header";
import BrandItem from "./brandItem/BrandItem";
import "./style.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBrandList } from "../../../redux/actions/brandActions";
import { getFilteredBrandList } from "../../../redux/actions/brandFilteredAction";
import Search from "../../../assets/search.JPG";
import { InnerInput as Input } from "../../common/input";
import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";

const YourBrands = (props) => {
  const { getBrandList, brandList } = props;

  const history = useHistory();

  const [searchBrands, setSearchBrands] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getBrandList();
  }, []);

  useEffect(() => {
    dispatch(getFilteredBrandList(searchBrands));
  }, [searchBrands]);

  return (
    <div className="brand-list__container">
      <div>
        <Header />
        <div className="brand-list__under-header">
          <div>
            <p className="brand-list__p-under-header">Your brands</p>
          </div>
          <div className="brand-list__container-input">
            <Input
              type="search"
              placeholder="Seach brands"
              customClass="brand-list"
              leftIcon={Search}
              onChange={(e) => setSearchBrands(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="brand-list__container-items">
        {brandList.map((item, index) => (
          <BrandItem item={item} key={index} searchBrands={searchBrands} />
        ))}
      </div>
      <div>
        <div className="brand-list__footer">
          <button
            className="brand-list__footer-button"
            onClick={() => {
              history.push("/add_brand");
            }}
          >
            Add new brand
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    brandList: state.brand.brandList,
  };
};

const mapDispatchToProps = {
  getBrandList,
};
export default connect(mapStateToProps, mapDispatchToProps)(YourBrands);
