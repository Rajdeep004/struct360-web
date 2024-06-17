<script setup>
	import {
		faCircle,
		faScrewdriverWrench,
	} from "@fortawesome/free-solid-svg-icons";

	const services = ref(
		[
			{
				title: "Value Engineering / Bid Planning",
				icon: "",
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
				icon: "",
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
				icon: "",
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
				icon: "",
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
				icon: "",
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
				icon: "",
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
				icon: "",
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
				icon: "",
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
		].map((it) => {
			return {
				...it,
				isFlipped: ref(false),
			};
		}),
	);
</script>

<template>
	<div
		id="services"
		as="section"
		class="m-4 flex flex-col items-center justify-center"
	>
		<div class="mb-8 space-y-6 text-center">
			<h6 class="font-medium uppercase tracking-widest">Our Services</h6>
			<h1 class="h1">
				We are a
				<span class="h1 underlineTxt relative inline-block after:!bg-accent/50">
					Customer Service
				</span>
				Organization that provides
			</h1>
		</div>
		<div
			class="mt-8 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3"
		>
			<UCard
				v-for="(it, index) in services"
				:key="index"
				@mouseover="it.isFlipped = true"
				@mouseleave="it.isFlipped = false"
				class="flip-card basicanimation group max-w-md justify-items-center rounded-none bg-zinc-100 p-4 tabular-nums hover:z-20 hover:-mt-4 hover:mb-4 hover:ring-2 hover:ring-accent"
			>
				<div class="flip-card-inner transition-all ease-in-out">
					<font-awesome
						:icon="faScrewdriverWrench"
						class="basicanimation mb-4 text-5xl group-hover:text-accent"
					/>
					<h4 class="h4 capatalise mb-2">
						{{ it.isFlipped ? "Our Services" : it.title }}
					</h4>
					<ul
						v-if="it.isFlipped"
						class="text-gray-600"
					>
						<li
							v-for="i in it.services"
							v-text="i"
							class="list-disc"
						/>
					</ul>
					<p
						v-else
						class="text-gray-600"
						v-text="it.caption"
					/>
				</div>
			</UCard>
		</div>
	</div>
</template>

<style scoped>
	.flip-card {
		perspective: 1000px;
	}

	.flip-card-inner {
		width: 100%;
		height: 100%;
		transition: transform 0.75s;
		transform-style: preserve-3d;
		/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
		backface-visibility: hidden;
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(360deg);
	}
</style>
