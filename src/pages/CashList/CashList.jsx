import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  CashCardImg,
  CashCardInfo,
  CashCardPrice,
  CashCardTitle,
  CashCardTrashButton,
  CashListItemStyled,
  CashListSendButton,
  CashListStyled,
  CashListUserMessege,
  CheckListTitle,
  StyledGrFormDelete,
} from "./CashList.styled";
import { cashListRemoveGood } from "../../redux/cashList.thunk";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CashListPage = () => {
  const { cashList } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [userMessege, setUserMessege] = useState("");
  return (
    <CashListStyled>
      <CheckListTitle>Список товарів</CheckListTitle>
      {cashList.length > 0 ? (
        <>
          {cashList.map((card, index) => {
            return (
              <CashListItemStyled>
                <CashCardImg
                  style={{
                    backgroundImage: `url(${
                      typeof card.image === "string"
                        ? card.image
                        : card.image[0]
                    })`,
                  }}
                />
                <CashCardInfo>
                  <CashCardTitle>{card.name.join(" ")}</CashCardTitle>
                  <CashCardPrice>{card.price} грн.</CashCardPrice>
                </CashCardInfo>
                <CashCardTrashButton
                  onClick={() => dispatch(cashListRemoveGood(index))}
                >
                  <StyledGrFormDelete />
                </CashCardTrashButton>
              </CashListItemStyled>
            );
          })}
          <CashListUserMessege
            placeholder="Додаткова інформація. Наприклад: колір, розмір."
            onChange={(e) => setUserMessege(e.target.value)}
          ></CashListUserMessege>
          <CashListSendButton
            onClick={() => navigation("/checkout", { state: { userMessege } })}
          >
            Перейти до оформлення відправки
          </CashListSendButton>
        </>
      ) : (
        "Корзина пуста"
      )}
    </CashListStyled>
  );
};
