import { useEffect, useState } from "react";
import {
  GoodsListItemInfoStyled,
  GoodsListItemIsNew,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
  MoreButton,
  StyledGrStar,
} from "./Main.styed";
import { CardModal } from "../../components/CardModal/CardModal";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import localStorage from "redux-persist/es/storage";
import { authSetFavoriteList, authSignInUser } from "../../redux/auth.thunk";

export const MainPage = () => {
  const [goods, setGoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();
  const [lastElements, setLastElements] = useState("");
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  let date = new Date().getTime() / 1000;

  useEffect(() => {
    if (
      localStorage.getItem("userEmail") &&
      localStorage.getItem("userPassword")
    ) {
      LogIn();
    }
  }, []);

  const LogIn = async () => {
    const email = await localStorage.getItem("userEmail");
    const password = await localStorage.getItem("userPassword");
    dispatch(
      authSignInUser({
        email,
        password,
      })
    );
    dispatch(authSetFavoriteList(email));
  };

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = async () => {
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

    let arr = [];
    documentSnapshots.docs.map((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    const filteredArr = [...new Set(arr)];
    setGoods(filteredArr);
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
      setGoods((prevstate) => [...prevstate, { ...doc.data(), id: doc.id }]);
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <GoodsListStyled id="cardList">
        {goods.length > 0 &&
          goods.map((item, index) => {
            return (
              <>
                <GoodsListItemStyled
                  key={item.id}
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
                    <GoodsListItemName>{item.name.join(" ")}</GoodsListItemName>
                    <p>{item.price} грн.</p>
                  </GoodsListItemInfoStyled>
                </GoodsListItemStyled>
              </>
            );
          })}
      </GoodsListStyled>
      <MoreButton onClick={getNewPosts}>Завантажити більше</MoreButton>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </>
  );
};
