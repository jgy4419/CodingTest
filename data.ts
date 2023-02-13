type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigi: string; type: "haiku" };
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
type ShortPoem = Haiku | Villanelle;

/* 
  Error: Type '{author: strinng; type: "villanelle";}'
  '{ author: string; type: "villanelle"; }' 형식은 'ShortPoem' 형식에 할당할 수 없습니다.
  '{ author: string; type: "villanelle"; }' 형식은 'Villanelle' 형식에 할당할 수 없습니다.
    'meter' 속성이 '{ author: string; type: "villanelle"; }' 형식에 없지만 '{ meter: number; type: "villanelle"; }' 형식에서 필수입니다.
*/
const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle"
}