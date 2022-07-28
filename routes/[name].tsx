/** @jsx h */
import { PageProps } from '$fresh/server.ts'
import { h } from 'preact'

export default function Greet({ params }: PageProps) {
  return <div>Hello {params.name}</div>
}
