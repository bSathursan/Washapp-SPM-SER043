import basketImage from "../assets/images/basket.png";
import washingMachineImage from "../assets/images/washing-machine.png";
import deliveryImage from "../assets/images/delivery.png";
import curtainImage from "../assets/images/curtain.png";
import DryCleaningImage from "../assets/images/dry-cleaning.png";
import LeatherJacketsImage from "../assets/images/leather-jackets.png";

const processSteps = [
	{
		src: basketImage,
		title: "We Collect",
		description:
			"Our Agent will come to your door step to collect your Items. (Free pick-up).",
		delay: 0,
	},
	{
		src: washingMachineImage,
		title: "We Clean",
		description:
			"We take dirt very seriously. Your Clothes receive our expert treatment.",
		delay: 100,
	},
	{
		src: deliveryImage,
		title: "We Deliver",
		description:
			"Hey pal, open up! Your clothes are delivered on time. Didn't we tell you laundry is so easy with Washapp? (Free Delivery).",
		delay: 200,
	},
];

const workDetails = [
	{
		src: DryCleaningImage,
		title: "Dry Cleaning",
		description:
			"Oil stains are may not be entirely possible to remove by water.  Synthetic fibers respond well to only dry cleaning.",
		delay: 0,
	},
	{
		src: curtainImage,
		title: "Curtains Cleaning",
		description:
			"The curtains come in different materials such as pure cotton lining, linen & cotton blend drapes in superior color, fabric, and texture.",
		delay: 100,
	},
	{
		src: LeatherJacketsImage,
		title: "Leather & Suede",
		description:
			"The curtains come in different materials such as pure cotton lining, linen & cotton blend drapes in superior color, fabric, and texture.",
		delay: 200,
	},
];

export { processSteps, workDetails };
