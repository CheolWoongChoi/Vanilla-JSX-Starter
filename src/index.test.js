describe('Index', () => {
  it('앱이 화면에 렌더링되어야 한다.', () => {
    const App = document.getElementById('app');
    expect(App).toBeInTheDocument();
  });
});
