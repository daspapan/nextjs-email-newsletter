import { GrowPlan, freePlan, scalePlan } from "@/app/configs/constants"
import { ICONS } from "@/shared/utils/icons"
import { Button } from "@nextui-org/react"


const PricingCard = ({active}:{active:string}) => {
    return (
        <div className="w-full md:flex items-start justify-around py-8">
            {/* free plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">

                <h5 className="">Launch</h5>
                <br/>
                <div className="border pb-8 boarder-[#000]">
                    <h5>
                        $0
                    </h5>
                    <p className="text-lg">
                        No commitment
                    </p>
                </div>
                <div className="pt-5">Whats Included...</div>

                {
                    freePlan.map((i:PlanType, index:number) => (
                        <div key={index} className="flex w-full items-center py-4">
                            <span className="text-xl">{ICONS.right}</span>
                            <p className="pl-2 text-lg">{i.title}</p>
                        </div>
                    ))
                }
                <br/>
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-days free trial of scale feature , then free forever. 
                </p>
            </div>

            {/** Grow Plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">

                <h5 className="">Grow</h5>
                <br/>
                <div className="border-b pb-8 border-black">
                    <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
                        ${active === "Monthly"? "42":"49"}/month
                    </h5>
                    <p className="text-lg">
                        Billed {active}
                    </p>
                </div>
                <div className="pt-5">
                    <p className="text-xl">Everything in lunch, plus...</p>
                </div>

                {
                    GrowPlan.map((i:PlanType, index:number) => (
                        <div key={index} className="flex w-full items-center py-4">
                            <span className="text-xl">{ICONS.right}</span>
                            <p className="pl-2 text-lg">{i.title}</p>
                        </div>
                    ))
                }
                <br/>
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-days free trial of scale feature , then free forever. 
                </p>
            </div>

            {/** Scale Plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">

                <h5 className="">Scale</h5>
                <br/>
                <div className="border-b pb-8 border-black">
                    <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
                        ${active === "Monthly"? "42":"49"}/month
                    </h5>
                    <p className="text-lg">
                        Billed {active}
                    </p>
                </div>
                <div className="pt-5">
                    <p className="text-xl">Everything in lunch, plus...</p>
                </div>

                {
                    scalePlan.map((i:PlanType, index:number) => (
                        <div key={index} className="flex w-full items-center py-4">
                            <span className="text-xl">{ICONS.right}</span>
                            <p className="pl-2 text-lg">{i.title}</p>
                        </div>
                    ))
                }
                <br/>
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-days free trial of scale feature , then free forever. 
                </p>
            </div>
        </div>
    )
}

export default PricingCard