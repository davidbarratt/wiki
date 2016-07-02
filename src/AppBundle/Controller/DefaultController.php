<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DefaultController extends Controller
{
    /**
     * @Route("/article/{id}", name="article_get")
     * @Method({"GET"})
     */
    public function articleGetAction($id, Request $request)
    {
        // @TODO use a param convertor rather than doing this in the controller.
        try {
            $article = $this->get('app.storage.article')->get('test');
        } catch (\Exception $e) {
            throw new NotFoundHttpException($e->getMessage());
        }
        // End @TODO

        return $this->json($article);
    }

    /**
     * @Route("/article", name="article_update")
     * @Method({"PUT"})
     */
    public function articleUpdateAction(Request $request)
    {
        // @TODO use a param convertor rather than doing this in the controller.
        $data = $request->getContent();
        if (empty($data)) {
            throw new BadRequestHttpException('No Content Sent.');
        }

        $data = json_decode($data);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('Error reading data.');
        }

        if (empty($data->id) || !isset($data->text)) {
            throw new BadRequestHttpException('Malformed Request. Missing id or text.');
        }
        // End @TODO

        $article = new Article($data->id, $data->text);
        $this->get('app.storage.article')->save($article);

        return $this->json($article);
    }
}
