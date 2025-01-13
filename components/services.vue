<script setup>
	import {
		faComputer,
		faHouseChimney,
		faPallet,
		faPersonDigging,
		faRulerCombined,
		faScrewdriverWrench,
		faSitemap,
		faVideo,
	} from "@fortawesome/free-solid-svg-icons";

	const services = ref([
		{
			title: "Value Engineering / Bid Planning",
			icon: faRulerCombined,
			caption:
				"Every Project Needs To Be Permitted And It Is An Essential Step For Any Owner And Investor To Get It Right",
			services: [
				"Development Permit Drawings",
				"Value Engineering",
				"Cost-Construction Matrix",
				"Pre-Bid Drawings / Modeling",
				"Permit Applications / Checklists",
			],
		},
		{
			title: "Architectural / Rendering",
			icon: faHouseChimney,
			caption:
				"Your Imagination Of Any Project Comes To Life After Modeling And Proper Visualization With Modern Technologies",
			services: [
				"Preliminary Drawings Coordination",
				"3D Modeling With BIM Integration",
				"Drawings Standards Per IBC/IRC",
				"3D Visualization",
				"Animation Walk Through",
				"As-Built Or Existing Demo Drawing",
			],
		},
		{
			title: "Structural Engineering / Drawings",
			icon: faPallet,
			caption:
				"Making Your Project Efficient With Climate Resilient And Sustainable With Proper Structural System",
			services: [
				"Bid And Value Engineering",
				"Load Calculations",
				"PEMB Modeling And Check",
				"Steel Structural Modeling / Drawings",
				"Concrete Design",
				"Wood / Wall Panel Design",
				"Interior / Exterior Framing Check",
				"Prototype / Franchise Structural Modeling",
				"Permit Planning And Stamping For All US / Canada Regions",
				"Construction Support",
				"Specialty Engineerings",
			],
		},
		{
			title: "MEP Engineering / Drawings",
			icon: faSitemap,
			caption:
				"Making Any Project Successful, Proper MEP Planning Needs To Be Established Throughout The Project Duration And After Construction Also",
			services: [
				"Com Check",
				"MEP Plans And Drawings",
				"RTU Plans And Framing Check",
				"Energy Audit",
				"EV And Solar Planning And Design",
				"Existing As-Built MEP Remodelling",
			],
		},
		{
			title: "AV Design And Engineering",
			icon: faVideo,
			caption:
				"Every Entertainment Venue Needs To Be Well Planned And Able To Deliver Top Quality End Product For People To Enjoy",
			services: [
				"AV Planning",
				"Scheduling",
				"AV BIM Modeling",
				"Integration Of Industry Tools",
				"AVIXA And CTS Specialty",
				"Technology And AV Plans",
				"Drawings",
				"Interior Framing Support Check",
			],
		},
		{
			title: "Construction Drawing Set Per Permit Requirements",
			icon: faPersonDigging,
			caption:
				"It Is Important To Get Your Construction Drawings As Per County / City Checklist",
			services: [
				"Stamping Of Any CD Drawings",
				"Permit Requirements Consideration",
				"Application Checklist And Document Preparations",
				"Specification And Package Planning",
				"Development And Construction Permit Coordination",
				"City/County Comments Coordination Or Approval",
			],
		},
		{
			title: "BIM Modeling And Support Cloud Services",
			icon: faComputer,
			caption:
				"Get The Project In Real Time With Modern Technology Before The Construction",
			services: [
				"3D-4D Modeling",
				"Scheduling And Quantity Check",
				"Scan To BIM",
				"Point Cloud Check",
				"Existing Real Time Modeling",
				"Clash Detection",
				"LOD 100-500 Modeling And Coordination",
				"Real-Time Site Plan Drawings",
				"Construction",
				"Construction Saas Software Coordination",
				"4D Simulation",
			],
		},
		{
			title: "Construction Support / As-Built Drawings",
			icon: faScrewdriverWrench,
			caption:
				"We Are Here To Support When Your Project Is Stuck And Need As-Built Construction Support",
			services: [
				"Truss Package Review",
				"Shop Drawings Review",
				"Specifications Coordination",
				"As-Built Modeling And Construction Check",
				"Quick Value Engineering And Modeling",
				"Contractor Specific Questions",
			],
		},
	]);
</script>

<template>
	<div
		id="services"
		as="section"
		class="m-4 flex flex-col items-center justify-center"
	>
		<div class="mb-8 space-y-6 text-center">
			<h6 class="font-medium uppercase tracking-widest">Our Services</h6>
			<h2 class="h1">
				We are a
				<span class="h1 underlineTxt inline-block">Customer Service</span>
				Organization that provides
			</h2>
		</div>
		<div
			class="container mx-auto mt-8 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3"
		>
			<ServiceCard
				:service="it"
				v-for="(it, index) in services"
				:key="index"
				class=""
			/>
		</div>
	</div>
</template>
