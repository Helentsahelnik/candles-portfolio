import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Helen</em>
					</strong>
					<br />I am a designer of candles and plaster planters
				</h1>
				<div className="header__text">
					<p>Each of my products is unique!</p>
				</div>
				<a href="#!" className="btn">
					Make an order
				</a>
			</div>
		</header>
	);
}

export default Header;