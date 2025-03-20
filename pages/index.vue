<script setup>
	const isFormOpen = ref(false);

	useSeoMeta({
		title: "STRUCT360 | US Canada Structural & BIM engineering solutions",
		meta: [
			{
				name: "description",
				content: `STRUCT360 provides expert structural engineering, BIM modeling, construction consulting services across US&Canada, with tools like AutoCAD,Revit,Enercalc
`,
			},
			// Open Graph / Facebook
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "https://www.struct360.com/" },
			{ property: "og:title", content: "STRUCT360" },
			{
				property: "og:description",
				content:
					"Struct360 offers construction services including timber framing, BIM modeling, design and construction solutions. Revit, AutoCAD and Enercalc for efficient work",
			},
			{
				property: "og:image",
				content: "https://www.struct360.com/struct360%20sec.svg",
			},
			// Twitter
			{ property: "twitter:card", content: "summary_large_image" },
			{ property: "twitter:url", content: "https://www.struct360.com/" },
			{ property: "twitter:title", content: "STRUCT360" },
			{
				property: "twitter:description",
				content:
					"Struct360 offers construction services including timber framing, BIM modeling, design and construction solutions. Revit, AutoCAD and Enercalc for efficient work",
			},
			{
				property: "twitter:image",
				content: "https://www.struct360.com/struct360%20sec.svg",
			},
			{
				name: "keywords",
				content: `#StructuralEngineering #EngineeringSolutions #ConstructionExperts #CivilEngineering #StructuralDesign #BuildingInnovation #ConstructionIndustry #SteelStructures #PrefabricatedBuildings #SteelFrameConstruction #ModernConstruction #SmartBuildingSolutions #EngineeringConsultants #InfrastructureDevelopment #BIMTechnology #FutureOfConstruction #IndustrialStructures #EngineeringUSA #ConstructionCanada #StructuralFirmsIndia #CivilEngineeringUSA #TopEngineeringFirm #BestConstructionCompany #HireEngineers #TopStructuralFirm #BestConstructionExperts #ConsultingEngineers #CommercialConstruction #IndustrialEngineering #WoodFraming #ShearWall #BalloonFraming #WallPanel #Drywall #StudFraming #WoodConnector #TimberFraming #TallWallFraming #WoodTrusses #PreEngineeredWoodTrusses #TrussBracing #ConcreteMasonryUni #CrawlSpaceFraming #LoadBearingWall #NonLoadBearingWall #BracingWalls #MezzanineFraming #RaftersFraming #CeilingFraming #ArmstrongCeiling #GypsumBoardCeiling #PartitionWall #Firewall #FireRatedInsulation #ColdFormedFraming #LightGaugeFraming #CRCBracing #LateralBracing #BottomPlateAnchors #EIFS #Stucco #MetalPanel #StoneVeneer #BrickVeneer #BypassFraming #SlipTrack #SlottedTrack #PDFsAnchor #MasonryAnchor #Dowels #ICFCore #InsulatedConcreteFootingWall #Reinforcement #SteelFraming #SteelJoistInstitute #SteelJoist #CompositeConcreteDeck #CorrugatedConcreteDeck #Foundation #RoofJoistFraming #ParapetFraming #RackStructuralAnalysis #BIMModeling #BIMEngineering #BIM360 #AutodeskConstructionCloud #Revit #AutoCAD #ChiefArchitect #Enercalc`,
			},
		],
	});
</script>

<template>
	<main class="space-y-24">
		<Hero @form="isFormOpen = !isFormOpen" />
		<button
			class="fixed bottom-48 end-0 z-50 -mx-6 hidden -rotate-90 rounded-lg bg-accent px-4 py-2 text-white md:inline-flex"
			@click="isFormOpen = true"
		>
			Inquiry
		</button>
		<Inquiry
			:isOpen="isFormOpen"
			@toggle="(x) => (isFormOpen = x)"
		/>
		<About />
		<WhyStruct360 class="!mt-12" />
		<!-- <Projects /> -->
		<Services class="!mt-36" />
		<Achievements />
		<Affilation class="space-y-24" />
		<Footer />
	</main>
</template>
