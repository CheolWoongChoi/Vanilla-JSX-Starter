/**
 * JSX에서 변환된 데이터로 엘리먼트를 생성
 */
export function createElement(tagName, props, ...children) {
  // 함수로 export된 JSX 컴포넌트를 대응
  if (tagName instanceof Function) {
    return tagName({
      ...props,
      children: children,
    });
  }

  const element = document.createElement(tagName);

  // props를 이용하여 엘리먼트에 attribute 추가
  Object.entries(props || {}).forEach((prop) => {
    const [key, value] = prop;
    const attr = key.startsWith('on') ? key.toLocaleLowerCase() : key;

    element[attr] = value;
  });

  // 자식 엘리먼트들이 createElement 재귀호출에 의해서 노드 또는 텍스트 노드가 되면, 부모 엘리먼트에 연결
  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(document.createTextNode(child));
  });

  return element;
}
