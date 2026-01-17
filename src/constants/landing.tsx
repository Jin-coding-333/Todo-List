import React from "react";

export const SECTION_CONFIG = {
  todo: {
    labelImage: "/img/todo.svg",
    labelAlt: "TO DO",
    emptyImageLarge: "/img/image_todo_large.svg",
    emptyImageSmall: "/img/image_todo_small.svg",
    emptyImageAlt: "No Todo",
    emptyMessage: (
      <>
        할 일이 없어요.
        <br />
        TODO를 새롭게 추가해주세요!
      </>
    ),
  },
  done: {
    labelImage: "/img/done.svg",
    labelAlt: "DONE",
    emptyImageLarge: "/img/image_done_large.svg",
    emptyImageSmall: "/img/image_done_small.svg",
    emptyImageAlt: "No Done",
    emptyMessage: (
      <>
        아직 다 한 일이 없어요.
        <br />
        해야 할 일들을 체크해보세요!
      </>
    ),
  },
} as const;
