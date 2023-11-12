import { getCategs } from "@/lib/categories";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type CategoryProps = {
    id: number;
    name: string;
    catalogId: number;
} | null

export const getServerSideProps: GetServerSideProps<{ categories: CategoryProps }> = (async (context) => {
    const id = context.query.id
    const categories = await getCategs(Number(id));
    return { props: { categories } }
})

export default function Categs({categories}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return(
        <div>
            Category {categories?.name} @{categories?.id} from {categories?.catalogId}
        </div>
    )
}
