
interface MyProps {
  children : React.ReactNode;
  weather : string;
}

function MyWeather (props: MyProps) {
  const {children, weather} = props;

  return (
    <div>
      <h2>{children}</h2>
      오늘의 날씨는 {weather}입니다.
    </div>
  )
}

export default MyWeather;