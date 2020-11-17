import React, { Suspense, ChangeEvent } from "react";
import { Wrapper } from "./styles";
import Loader from "../../components/Loader";
import { IUBSState, IUBSProps, IItem } from "./interface";
import TableGrid from "./TableGrid";

const colWidth = [500, 100];
const tablelHeaders = ["Title", "Thumbnail"];

const Ingredients = React.lazy(() => import("../Common/Ingredients"));
class UBS extends React.Component<IUBSProps, IUBSState> {
  constructor(props: IUBSProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      ingredients: "",
    };
  }

  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  handleCloseModal = (): void => {
    this.setState({
      isModalOpen: false,
    });
  };

  moreDetails = (selectedItem: IItem) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      ingredients: selectedItem.ingredients,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    const { isDataLoading = false, data = [], isServerDown } = this.props;

    if (isServerDown) return null;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "24px",
        }}
      >
        <Wrapper>
          <TableGrid
            rows={data}
            isDataLoading={isDataLoading}
            colWidth={colWidth}
            message="no data"
            tablelHeaders={tablelHeaders}
            moreDetails={this.moreDetails}
          />
          <Suspense fallback={<Loader />}>
            <Ingredients
              isShow={isModalOpen}
              closeModal={this.handleCloseModal}
              message={this.state.ingredients}
            />
          </Suspense>
        </Wrapper>
      </div>
    );
  }
}

export default UBS;
