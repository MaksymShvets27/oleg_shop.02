import { useLocation } from "react-router-dom";
import {
  NoGoods,
  SearchPageCheckBox,
  SearchPageCheckBoxsGroup,
  SearchPageContainer,
  SearchPageInput,
  SearchPageLabel,
  SearchPageLegend,
  SearchPageSelect,
} from "./SearchPage.styled";
import {
  GoodsListItemInfoStyled,
  GoodsListItemIsNew,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
  MoreButton,
  StyledGrStar,
} from "../Main/Main.styed";
import { useEffect, useState } from "react";
import { CardModal } from "../../components/CardModal/CardModal";
import { AdminFormOption, AdminFormSelect } from "../Admin/Admin.styled";
import {
  bootsSize,
  categoryList,
  clothesSize,
} from "../../constants/SelectCategory/SelectCategory";
import { nanoid } from "nanoid";
import {
  collection,
  endAt,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const SearchPage = () => {
  const location = useLocation();
  const state = location.state;
  const user = useSelector(selectUser);
  const [goods, setGoods] = useState([]);
  const [listLength, setListLength] = useState(24);
  const [filtredGoods, setFiltredGoods] = useState(goods);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();
  const [lastElements, setLastElements] = useState("");
  const [filter, setFilter] = useState("");
  const [sexFilter, setSexFilter] = useState("");
  const [categorySelect, setCategorySelect] = useState(
    state && state.category ? state.category : ""
  );
  const [sizeFilter, setSizeFilter] = useState([]);

  const order = ["xs", "s", "m", "l", "xl", "xl+"];
  let date = new Date().getTime() / 1000;

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getNewPosts = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getGoodsByCategory = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getMoreGoodsByCategory = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getGoodsByFilter = async () => {
    setFiltredGoods([]);
    const first = query(collection(db, "goods"), orderBy("name"), limit(25));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getMoreGoodsByFilter = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("name"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getGoodsByFilterAndCategory = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);
    let array = [];
    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        array.push({ ...doc.data(), id: doc.id });
      }
    });
    setFiltredGoods(array);
  };

  const getMoreGoodsByFilterAndCategory = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getGoodsByCategoryAndSex = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getMoreGoodsByCategoryAndSex = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getGoodsByFilterAndSex = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("name"),
      limit(25)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getMoreGoodsByFilterAndSex = async () => {
    const next = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("name"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getGoodsByFilterAndCategoryAndSex = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);
    let array = [];
    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        array.push({ ...doc.data(), id: doc.id });
      }
    });
    setFiltredGoods(array);
  };

  const getMoreGoodsByFilterAndCategoryAndSex = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getGoodsBySex = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getMoreGoodsBySex = async () => {
    const next = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };
  // -----------------------------------------------
  const getPostsBySize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getNewPostsBySize = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByCategoryAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByCategoryAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByFilterAndSize = async () => {
    setFiltredGoods([]);
    const first = query(collection(db, "goods"), orderBy("name"), limit(25));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByFilterAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("name"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByFilterAndCategoryAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByFilterAndCategoryAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByCategoryAndSexAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByCategoryAndSexAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByFilterAndSexAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("name"),
      limit(25)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByFilterAndSexAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      where("size", "==", sizeFilter),
      orderBy("name"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsByFilterAndCategoryAndSexAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsByFilterAndCategoryAndSexAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (
          doc.data().size.toLowerCase().includes(size) &&
          doc.data().name.toLowerCase().includes(filter.toLowerCase())
        ) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getGoodsBySexAndSize = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };

  const getMoreGoodsBySexAndSize = async () => {
    const next = query(
      collection(db, "goods"),
      where("sex", "==", sexFilter),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      sizeFilter.map((size) => {
        console.log(doc.data().size);
        if (doc.data().size.toLowerCase().includes(size)) {
          setFiltredGoods((prevstate) => [
            ...prevstate,
            { ...doc.data(), id: doc.id },
          ]);
        }
      });
    });
  };
  //---------------------
  const setSizeGoods = (boolean, size) => {
    if (boolean && !sizeFilter.includes(size)) {
      setSizeFilter((prevstate) =>
        [...prevstate, size].sort((a, b) => {
          return order.indexOf(a) - order.indexOf(b);
        })
      );
    }
    if (!boolean) {
      setSizeFilter((prevstate) =>
        prevstate
          .filter((item) => item !== size)
          .sort((a, b) => {
            return order.indexOf(a) - order.indexOf(b);
          })
      );
    }
  };

  useEffect(() => {
    setFiltredGoods(24);
    if (
      !(filter.length > 0) &&
      !categorySelect &&
      !sexFilter &&
      !sizeFilter.length > 0
    ) {
      getAllPost();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      !sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByCategory();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      !sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByFilter();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      !sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByFilterAndCategory();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByCategoryAndSex();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByFilterAndSex();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsByFilterAndCategoryAndSex();
    } else if (
      !filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      !sizeFilter.length > 0
    ) {
      getGoodsBySex();
    } else if (
      !(filter.length > 0) &&
      !categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getPostsBySize();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByCategoryAndSize();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByFilterAndSize();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByFilterAndCategoryAndSize();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByCategoryAndSexAndSize();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByFilterAndSexAndSize();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsByFilterAndCategoryAndSexAndSize();
    } else if (
      !filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getGoodsBySexAndSize();
    }
  }, [filter, categorySelect, sexFilter, sizeFilter]);

  useEffect(() => {
    if (document.getElementById("checkboxes")) {
      var inputs = document.querySelectorAll("input[type='checkbox']");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
    }
    setSizeFilter([]);
  }, [filter, categorySelect, sexFilter]);

  const getMore = () => {
    if (
      !(filter.length > 0) &&
      !categorySelect &&
      !sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getNewPosts();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      !sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByCategory();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      !sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByFilter();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      !sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByFilterAndCategory();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByCategoryAndSex();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByFilterAndSex();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsByFilterAndCategoryAndSex();
    } else if (
      !(filter.length > 0) &&
      !categorySelect &&
      sexFilter &&
      !(sizeFilter.length > 0)
    ) {
      getMoreGoodsBySex();
    } else if (
      !(filter.length > 0) &&
      !categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getNewPostsBySize();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByCategoryAndSize();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByFilterAndSize();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      !sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByFilterAndCategoryAndSize();
    } else if (
      !(filter.length > 0) &&
      categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByCategoryAndSexAndSize();
    } else if (
      filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByFilterAndSexAndSize();
    } else if (
      filter.length > 0 &&
      categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsByFilterAndCategoryAndSexAndSize();
    } else if (
      !filter.length > 0 &&
      !categorySelect &&
      sexFilter &&
      sizeFilter.length > 0
    ) {
      getMoreGoodsBySexAndSize();
    }
  };

  useEffect(() => {
    if (filtredGoods.length > 0 && filtredGoods.length < listLength) {
      getMore();
      const uniqueGoods = filtredGoods.filter((item, index) => {
        return arr.indexOf(item) === index;
      });
      setFiltredGoods(uniqueGoods);
    }
  }, []);

  return (
    <SearchPageContainer>
      <SearchPageInput
        placeholder="Назва товару"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      <SearchPageSelect
        id="category"
        name="category"
        value={categorySelect}
        onChange={(event) => {
          setCategorySelect(event.target.value);
        }}
      >
        <AdminFormOption
          key={nanoid()}
          value={``}
          selected={(!(state && state.category) && "selected") || null}
        >
          Без категорії
        </AdminFormOption>
        {categoryList.map((category, index) =>
          category.category ? (
            <optgroup label={`${category.name}`} key={nanoid()}>
              {category.category &&
                category.category.map((category) => {
                  return (
                    <AdminFormOption
                      key={nanoid()}
                      value={`${category}`}
                      selected={
                        (categorySelect === category && "selected") || null
                      }
                    >
                      {category}
                    </AdminFormOption>
                  );
                })}
            </optgroup>
          ) : (
            <AdminFormOption
              key={nanoid()}
              value={`${category.name}`}
              style={{ fontWeight: "bolder" }}
              selected={
                (categorySelect === category.name && "selected") || null
              }
            >
              {category.name}
            </AdminFormOption>
          )
        )}
      </SearchPageSelect>
      <SearchPageSelect
        id="sexFilter"
        name="sexFilter"
        value={sexFilter}
        onChange={(event) => {
          setSexFilter(event.target.value);
        }}
      >
        <AdminFormOption key={nanoid()} value={``}>
          Для всіх
        </AdminFormOption>
        <AdminFormOption key={nanoid()} value={`Чоловік`}>
          Для нього
        </AdminFormOption>
        <AdminFormOption key={nanoid()} value={`Жінка`}>
          Для неї
        </AdminFormOption>
        <AdminFormOption key={nanoid()} value={`Унісекс`}>
          Унісекс
        </AdminFormOption>
      </SearchPageSelect>
      {categoryList[0].category.includes(categorySelect) && (
        <>
          <SearchPageLegend>Розміри</SearchPageLegend>
          <SearchPageCheckBoxsGroup id="checkboxes">
            {clothesSize.map((size) => {
              return (
                <SearchPageLabel for={size}>
                  {size.toUpperCase()}
                  <SearchPageCheckBox
                    type="checkbox"
                    name={size}
                    id={size}
                    onChange={(e) => {
                      setSizeGoods(e.target.checked, e.target.name);
                    }}
                  />
                </SearchPageLabel>
              );
            })}
          </SearchPageCheckBoxsGroup>
        </>
      )}
      {categoryList[1].category.includes(categorySelect) && (
        <>
          <SearchPageLegend>Розміри</SearchPageLegend>
          <SearchPageCheckBoxsGroup id="checkboxes">
            {bootsSize.map((size) => {
              return (
                <SearchPageLabel for={size}>
                  {size}
                  <SearchPageCheckBox
                    type="checkbox"
                    name={size}
                    id={size}
                    onChange={(e) => {
                      setSizeGoods(e.target.checked, e.target.name);
                    }}
                  />
                </SearchPageLabel>
              );
            })}
          </SearchPageCheckBoxsGroup>
        </>
      )}
      <GoodsListStyled>
        {filtredGoods.length > 0 ? (
          filtredGoods.map((item, index) => {
            return (
              <>
                <GoodsListItemStyled
                  key={index}
                  onClick={() => handleOpenModal(item)}
                  style={{
                    backgroundImage: `url(${
                      typeof item.image === "string"
                        ? item.image
                        : item.image[0]
                    })`,
                  }}
                >
                  {user.favoriteList &&
                    user.favoriteList.map((good) => {
                      if (good.name === item.name) {
                        return <StyledGrStar />;
                      }
                    })}
                  {date - item.createTime.seconds < 259200 && (
                    <GoodsListItemIsNew>Новинка!</GoodsListItemIsNew>
                  )}
                  <GoodsListItemInfoStyled>
                    <GoodsListItemName>{item.name}</GoodsListItemName>
                    <p>{item.price} грн.</p>
                  </GoodsListItemInfoStyled>
                </GoodsListItemStyled>
              </>
            );
          })
        ) : (
          <NoGoods>
            <p>Нічого не знайдено</p>
            <p> (використайте фільтр пошуку)</p>
          </NoGoods>
        )}
      </GoodsListStyled>
      <MoreButton
        onClick={() => {
          getMore();
          setListLength(listLength + 24);
        }}
      >
        Завантажити більше
      </MoreButton>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </SearchPageContainer>
  );
};
