import { Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "sanity";

const query = groq`*[_type == social]`

type Data = {
    socials: Social[];
}

export default async function handler({
    req, res
} : { req: NextApiRequest, 
    res: NextApiResponse<Data> }) {
    const socials: Social[] = await SanityClient.findlist();
    res.status(201).json(socials);
}