import { IconDiscord } from "#/assets/brand-icons/icon-discord";
import { IconDocker } from "#/assets/brand-icons/icon-docker";
import { IconFigma } from "#/assets/brand-icons/icon-figma";
import { IconGithub } from "#/assets/brand-icons/icon-github";
import { IconGitlab } from "#/assets/brand-icons/icon-gitlab";
import { IconGmail } from "#/assets/brand-icons/icon-gmail";
import { IconMedium } from "#/assets/brand-icons/icon-medium";
import { IconNotion } from "#/assets/brand-icons/icon-notion";
import { IconSkype } from "#/assets/brand-icons/icon-skype";
import { IconSlack } from "#/assets/brand-icons/icon-slack";
import { IconStripe } from "#/assets/brand-icons/icon-stripe";
import { IconTelegram } from "#/assets/brand-icons/icon-telegram";
import { IconTrello } from "#/assets/brand-icons/icon-trello";
import { IconWhatsapp } from "#/assets/brand-icons/icon-whatsapp";
import { IconZoom } from "#/assets/brand-icons/icon-zoom";

export const apps = [
	{
		name: "Telegram",
		logo: <IconTelegram />,
		connected: false,
		desc: "Connect with Telegram for real-time communication.",
	},
	{
		name: "Notion",
		logo: <IconNotion />,
		connected: true,
		desc: "Effortlessly sync Notion pages for seamless collaboration.",
	},
	{
		name: "Figma",
		logo: <IconFigma />,
		connected: true,
		desc: "View and collaborate on Figma designs in one place.",
	},
	{
		name: "Trello",
		logo: <IconTrello />,
		connected: false,
		desc: "Sync Trello cards for streamlined project management.",
	},
	{
		name: "Slack",
		logo: <IconSlack />,
		connected: false,
		desc: "Integrate Slack for efficient team communication",
	},
	{
		name: "Zoom",
		logo: <IconZoom />,
		connected: true,
		desc: "Host Zoom meetings directly from the dashboard.",
	},
	{
		name: "Stripe",
		logo: <IconStripe />,
		connected: false,
		desc: "Easily manage Stripe transactions and payments.",
	},
	{
		name: "Gmail",
		logo: <IconGmail />,
		connected: true,
		desc: "Access and manage Gmail messages effortlessly.",
	},
	{
		name: "Medium",
		logo: <IconMedium />,
		connected: false,
		desc: "Explore and share Medium stories on your dashboard.",
	},
	{
		name: "Skype",
		logo: <IconSkype />,
		connected: false,
		desc: "Connect with Skype contacts seamlessly.",
	},
	{
		name: "Docker",
		logo: <IconDocker />,
		connected: false,
		desc: "Effortlessly manage Docker containers on your dashboard.",
	},
	{
		name: "GitHub",
		logo: <IconGithub />,
		connected: false,
		desc: "Streamline code management with GitHub integration.",
	},
	{
		name: "GitLab",
		logo: <IconGitlab />,
		connected: false,
		desc: "Efficiently manage code projects with GitLab integration.",
	},
	{
		name: "Discord",
		logo: <IconDiscord />,
		connected: false,
		desc: "Connect with Discord for seamless team communication.",
	},
	{
		name: "WhatsApp",
		logo: <IconWhatsapp />,
		connected: false,
		desc: "Easily integrate WhatsApp for direct messaging.",
	},
];
